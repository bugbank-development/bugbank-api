/* 
    - headersMiddleware
    - Criado para setar headers nas respostas (solução de alguns problemas) 
*/

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Linha para solucionar problemas de requisições do browser.
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS,HEAD,TRACE');
    res.header('X-Powered-By', 'Express 4.17.1'); // Apenas para identificação do pessoal de infra 

    /* Configuração de header de segurança - (desabilitados) */
    res.header('X-Xss-Protection', '0');

    next();
}