import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()

const handler = async (req, res) => {


    const record = await xata.db.basic_info.create({
        Address: req.body.Address,
        Email: req.body.Email,
        Full_name: req.body.Full_name,
        Phone_number: req.body.Phone_number,
        Profile_Photo_Url: req.body.Profile_Photo_Url,
        Role: req.body.Role,
        Public_id: req.body.Public_id,
        unique_id: req.body.unique_id
    }).then((data) => {
        res.end(JSON.stringify(data));
    })
        .catch((err) => {
            res.end(JSON.stringify(err));
            res.end()
        })
    // console.log(record, 'record')
    // res.end(JSON.stringify(record));
    // resolve();
    // res.end(JSON.stringify(res));

}
export default handler



    // .then(async (res) => {
    //     await res.end(JSON.stringify(record))
    // }).catch((err) => {
    //     res.end(JSON.stringify(err));
    //     // resolve();
    // })