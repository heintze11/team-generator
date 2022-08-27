const Engineer = require("../lib/engineer");
const engineer = new Engineer("Levi", "1", "test@test.com", "heintze11");


describe("Engineer", () => {
    it("Create constructor class from Engineer object", () => {
        expect(engineer.name).toBe("Levi");
        expect(engineer.id).toBe("1");
        expect(engineer.email).toBe("test@test.com");
        expect(engineer.github).toBe("heintze11");
    });
    it("Confirm name from getName method", () => {
        expect(engineer.getName()).toBe("Levi");
    });
    it("Confirm ID from getID method", () => {
        expect(engineer.getID()).toBe("1");
    });
    it("Confirm email from getEmail method", () => {
        expect(engineer.getEmail()).toBe("test@test.com");
    });
    it("Confirm Github from getGithub method", () => {
        expect(engineer.getGithub()).toBe("heintze11");
    });
    it("Confirm role from getRole method", () => {
        expect(engineer.getRole()).toBe("Engineer");
    });
});