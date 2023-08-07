const { databaseConnect } = require("../database/database");
const { pagination } = require("../query/usersQuery");

async function pages({ page, limit }) {
  // const pag =  {page, limit}
  const offset = (page - 1) * limit;
  //   const p1 = new Promise((resolve, reject) => {
  //     databaseConnect.query(pagination, [+limit, +offset], (error, result) => {
  //       resolve(result);
  //       console.log(result);
  //     });
  //   });
  //   const p2 = new Promise((resolve, reject) => {
  //     databaseConnect.query("select * from myUsers", (error, result) => {
  //       resolve(result);
  //     });
  //   });

  const [result1, result2] = await Promise.all([
    databaseConnect.query(pagination, [+limit, +offset]),
    databaseConnect.query("select * from myUsers"),
  ]);
  const dataFromQuery1 = result1[0];
  const dataFromQuery2 = result2[0];

  console.log("Data from query 1:", dataFromQuery1);
  console.log("Data from query 2:", dataFromQuery2);
  return { dataFromQuery1, dataFromQuery2 };
}

module.exports = { pages };
