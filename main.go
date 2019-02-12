package main

import (
	"bytes"
	"fmt"
	"html/template"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/keighl/postmark"
)

// Email ...
type Email struct {
	Name    string
	Email   string
	Message string
}

// MailerHandler ...
func MailerHandler(c *gin.Context) {
	var emailMessage Email
	c.BindJSON(&emailMessage)
	client := postmark.NewClient("69208051-a037-49f5-9255-65a676ec6c41", "98ef0621-2965-49ec-8c52-bc292d5605b0")
	t := template.New("Email HTML Body")
	html := `Hello!<br><br>
	A message was received thru the contact form:<br><br>
	<hr>
	<strong>Name</strong>: {{.Name}}<br>
	<strong>Email</strong>: {{.Email}}<br>
	<strong>Message</strong>: {{.Message}}
	<hr>
	<br>
	I'm the Mailer...at your service.<br>
	You're welcome!
	`
	t.Parse(html)
	var htmlBody bytes.Buffer
	t.Execute(&htmlBody, emailMessage)
	email := postmark.Email{
		From:     "notifications@scibizinformatics.com",
		To:       "joemar.ct@gmail.com",
		Subject:  "Contact Form | SciBiz Informatics",
		HtmlBody: htmlBody.String(),
	}
	_, err := client.SendEmail(email)
	if err == nil {
		c.JSON(200, gin.H{
			"success": true,
		})
	} else {
		fmt.Println(err.Error())
		c.JSON(200, gin.H{
			"success": false,
		})
	}
}

func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./webapp/dist", true)))
	r.POST("/mailer", MailerHandler)
	r.Run(":9000")
}
