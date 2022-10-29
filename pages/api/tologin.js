import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {

    const { email, password } = req.body


    const records = (await xata?.db?.users.getAll()).filter('email', 'akinfemi46@gmail.com')

    // const record = await xata.db.users.create({
    //     password: "string",
    //     email: "a@b.com",
    //     username: "string",
    // });

    res.end()

    console.log(records);


    // res.end(JSON.stringify(records));

}
export default handler



