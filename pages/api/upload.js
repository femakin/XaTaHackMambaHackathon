import { useContext } from 'react'
import { GlobalContext } from '../../context/globalContext'
import { getXataClient } from '../../utils/xata.codegen'
const xata = getXataClient()
// const { loggedinuser, setLoggedinuser } = useContext(GlobalContext)


const handler = async (req, res) => {


    const record = await xata.db.basic_info.create({
        // Address: req.body.Address,
        // Email: req.body.Email,
        // Full_name: req.body.Full_name,
        // Phone_number: req.body.Phone_number,
        // Profile_Photo_Url: req.body.Profile_Photo_Url,
        // Role: req.body.Role,
        // Public_id: req.body.Public_id,
        // unique_id: req.body.unique_id
        Full_name: req.body.Full_name,
        Email: req.body.Email,
        Address: req.body.Address,
        Phone_number: req.body.Phone_number,
        Role: req.body.Role,
        Profile_Photo_Url: req.body.Profile_Photo_Url,
        Public_id: req.body.Public_id,
        user: req.body.user,
        unique_id: req.body.unique_id,
        Job_Title_Ex: req.body.Job_Title_Ex,
        City_town_Ex: req.body.City_town_Ex,
        Employer_Ex: req.body.Employer_Ex,
        Start_date_ex: req.body.Start_date_ex,
        End_Date_Ex: req.body.End_date_Ed,
        Achievement_one_Ex: req.body.Achievement_one_Ex,
        Achievement_two_Ex: req.body.Achievement_two_Ex,
        Achievement_three_Ex: req.body.Achievement_three_Ex,
        Degree_Ed: req.body.Degree_Ed,
        City_Ed: req.body.City_Ed,
        School_Ed: req.body.School_Ed,
        Start_date_Ed: req.body.Start_date_Ed,
        End_date_Ed: req.body.End_date_Ed,
        Award_one_Ed: req.body.Award_one_Ed,
        Award_two_Ed: req.body.Award_two_Ed,
        Award_three_Ed: req.body.Award_three_Ed,
        Hobby: req.body.Hobby,
        Company_name_Rfx: req.body.Company_name_Rfx,
        Contact_person_Rfx: req.body.Contact_person_Rfx,
        Phone_number_Rfx: req.body.Phone_number_Rfx,
        Email_Address_Rfx: req.body.Email_Address_Rfx,
        Skill: req.body.Skill,
        Level_sk: req.body.Level_sk,
        Cert_Img_one_url: req.body.Cert_Img_one_url,
        Cert_Img_two_url: req.body.Cert_Img_two_url,
        Language: req.body.Language,
        Cert_Public_Id: req.body.Cert_Public_Id

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