module.exports = function(ngModule)
{
    require('./IndexArticlesController')(ngModule);
    require('./CreateArticlesController')(ngModule);
    require('./ShowArticlesController')(ngModule);
}