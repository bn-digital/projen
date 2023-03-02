import { Command } from 'commander'
import { default as inquirer } from 'inquirer'

const command = new Command()
command.parse(process.argv)
inquirer
  .prompt([
    {
      name: 'name',
      message: 'What is project name?',
      transformer: (input: string) =>
        Array.from(input)
          .map((char, idx) => (char.match(/[A-Z]/) ? (idx !== 0 ? `-${char}` : char).toLowerCase() : char))
          .reduce((acc, char) => (acc + char).replace(' ', '-').replace(':', '-').replace('--', '-'), ''),
      validate: (input: string) => input.length >= 3 || 'Pick up more informative name',
    },
    {
      name: 'type',
      message: 'Specify type of the project:',
      type: 'list',
      loop: true,
      choices: [{ name: 'frontend' }, { name: 'backend' }, { name: 'full-stack' }],
    },
    {
      name: 'template',
      message: 'Which project template you are going to use?',
      type: 'list',
      loop: true,
      choices: (answers: { name: string; type: string }) =>
        [
          { name: 'full-stack/react-strapi' },
          { name: 'full-stack/react-nextjs' },
          { name: 'frontend/html' },
          { name: 'frontend/react-ssr' },
          { name: 'frontend/react-antd' },
        ].filter(it => it.name.startsWith(answers.type)),
    },
  ])
  .then(console.log)
