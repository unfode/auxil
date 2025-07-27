import { execSync } from "child_process";

function minor(token: string): void {
  const commands = [
    "npx tsc",
    'npm version minor --message "%s"',
    `npm publish --//registry.npmjs.org/:_authToken=${token}`,
  ];
  const output = execSync(commands.join(" && "));
  console.log(output.toString());
}

export { minor };
