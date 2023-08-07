
const pagination = (tableName)=>{
    sql = `select * from ${tableName} limit ? offset ?`;
    return sql;
}


module.exports = {pagination}