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

    // res.end()

    console.log(records);

    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify(records))

        .then((data) => {
            res.end(JSON.stringify(data));
        })
        .catch((err) => {
            res.end(JSON.stringify(err));
            res.end()
        })
    console.log(record, 'record')
    res.end(JSON.stringify(record));
    resolve();
    res.end(JSON.stringify(res));



    // res.end()


    // res.end(JSON.stringify(records));

}
export default handler



