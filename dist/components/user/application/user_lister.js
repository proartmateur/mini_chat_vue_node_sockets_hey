"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLister = void 0;
class UserLister {
    static list() {
        return new Promise((resolve, reject) => {
            const users = [
                {
                    name: "Naruto",
                    serie: "Naruto Shipuden"
                }
            ];
            resolve(users);
        });
    }
}
exports.UserLister = UserLister;
//# sourceMappingURL=user_lister.js.map