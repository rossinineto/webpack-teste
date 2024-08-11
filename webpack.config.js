const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

const { merge } = require('webpack-merge');

// Podemos incluir plugins Webpack, através de addons, que fazem 
// com que não precisemos executá-lo toda vez que estamos desenvolvendo.
// Veremos um exemplo quando nos configurarmos 'Bundle Analyzer'
const addons = (/* string | string[] */ addonsArg) => {
  
  // Normalizar array de addons (flatten)
  let addons = [...[addonsArg]] 
    .filter(Boolean); // Se addons é indefinido, filtrá-lo

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
};

// 'env' conterá a variável ambiental da seção 'scripts' 
// no arquivo 'package.json'.
// console.log(env); => { env: 'dev' }
module.exports = env => {

  // Usamos 'buildValidations' para checar a flag 'env'
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  // Selecione a configuração do Webpack a ser usada; desenvolvimento 
  // ou produção
  // console.log(env.env); => dev
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  
  // 'webpack-merge' combinará nossas configurações compartilhadas, 
  // as configurações específicas do ambiente e qualquer adição que 
  // estejamos incluindo
  const mergedConfig = merge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );

  // Em seguida, retorna a configuração final para Webpack
  return mergedConfig;
};