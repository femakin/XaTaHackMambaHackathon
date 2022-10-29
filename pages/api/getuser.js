import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {

    const xata = getXataClient();



    const records = await xata.db.users.getAll();

    console.log(records)


    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({ records }));


    res.end()
    // if (!user) {
    //     await xata.db.users.create({ username, password: password })
    //     return {
    //         isAuthenticated: true, username
    //     }
    // }


    // res.status(400).json({ error: "Bad Request" });

    // console.log(user)
    // res.end(JSON.stringify(records));
    // res.end()



}
export default handler



