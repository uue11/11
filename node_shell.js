const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'c8eac299-d04b-45b9-9cae-4f480737b5a3'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
