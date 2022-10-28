import { getXataClient } from '../../utils/xata.codegen'
import bcrypt from 'bcryptjs'
import { Base64 } from 'js-base64';



const xata = getXataClient()

const handler = async (req, res) => {
    let latin = 'dankogai';
    const salt = bcrypt.genSaltSync(10)
    // const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    const hashedPassword = Base64.encode(req.body.password);


    const record = await xata.db.users.create({
        email: req.body.email,
        password: hashedPassword,
        username: req.body.username,
    }).then((data) => {
        res.end(JSON.stringify(data));
    })
        .catch((err) => {
            res.end(JSON.stringify(err));
            res.end()
        })

}
export default handler