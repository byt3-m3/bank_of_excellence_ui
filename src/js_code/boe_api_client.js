export class BoeApiClient {

    constructor(url) {
        this.url = url
        this.user_manager_endpoint = '/user_manager'
        this.axiosClient = require('axios').default;
        // this.axiosClient.defaults.withCredentials = true
    }

    createNewFamily(
        family_name,
        first_name,
        last_name,
        email,
        dob,
    ) {
        let url = `${this.url}${this.user_manager_endpoint}/family`
        console.log(url)
        this.axiosClient.post(
            url,
            {
                NewFamilyEvent: {
                    description: family_name,
                    name: family_name,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    dob: dob,
                    subscription_type: 0
                }
            },
        ).then((response) => {
            console.log(
                `New Family Requested, FamilyID=${response.headers['x-family-id']}`
            )
            alert(`New Family Requested, FamilyID=${response.headers['x-family-id']}`)
            console.log(response.headers)


        }).catch((error) => {
            if (error.response) {
                alert(`Unable to Access ${error.response.url}`)

            } else {
                console.log(`Unable to Access: ${this.url}`)

            }

        })
    }
}


export function getBoeApiClient() {
    return new BoeApiClient(
        "http://127.0.0.1:5000/api/v1"
    )

}