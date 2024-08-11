(async () => {
  const { default: chalk } = await import('chalk');
  const ERR_NO_ENV_FLAG = chalk.red(
    `Você deve passar um --env.env flag em seu build para que o webpack funcione!`
  );
  module.exports = {
    ERR_NO_ENV_FLAG
  };
})();

