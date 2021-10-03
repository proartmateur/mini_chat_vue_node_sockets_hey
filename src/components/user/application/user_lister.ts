
export class UserLister {
    public static list(){
        return new Promise( (resolve, reject) => {
            const users = [
                {
                    name: "Naruto",
                    serie: "Naruto Shipuden"
                }
            ];
            resolve(users);
        } )
    }
}