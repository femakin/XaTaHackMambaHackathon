import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {

    const xata = getXataClient();



    const records = await xata.db.users.getAll();

    console.log(records)
    // if (!user) {
    //     await xata.db.users.create({ username, password: password })
    //     return {
    //         isAuthenticated: true, username
    //     }
    // }


    // res.status(400).json({ error: "Bad Request" });

    // console.log(user)
    // res.end(JSON.stringify(records));
    res.end()



}
export default handler



