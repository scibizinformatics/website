cd /app
./generate_env_file.sh > /app/.env
npm run build
http-server --port 9000 dist
