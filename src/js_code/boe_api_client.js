import {AUTH_API_URL,  CORE_API_URL} from "@/js_code/env";

export async function invokeCreateFamilyLocalUser(
    family_name,
    first_name,
    last_name,
    desired_username,
    password,
    dob,
    email
) {



    let axiosClient = require('axios').default;
    let url = `${CORE_API_URL}/api/v1/registration/family/local`
    let event = {
        "FamilyRegistrationLocalRequest": {
            family_name: family_name,
            first_name: first_name,
            last_name: last_name,
            desired_username: desired_username,
            password_hash: password,
            dob: dob,
            email: email,
        }
    }

    return axiosClient.post(
        url,
        event
    )
}


export async function authenticateUser(
    username,
    password
) {
    let axiosClient = require('axios').default;
    let auth_api_endpoint = `${AUTH_API_URL}/api/v1/auth/local/basic`

    return axiosClient.post(
        auth_api_endpoint,
        {
            "LocalAuthRequest": {
                "username": username,
                "password": password
            }
        }
    )


}

export async function getFamilyDetails(
    familyID
) {
    console.log(CORE_API_URL)
    let axiosClient = require('axios').default;
    let auth_api_endpoint = `${CORE_API_URL}/api/v1/family/${familyID}`

    return axiosClient.get(auth_api_endpoint)
}