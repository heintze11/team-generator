const Intern = require("../lib/intern");
const intern = new Intern("Levi", "1", "test@test.com", "DU");


describe("Intern", () => {
    it("Create constructor class from intern object", () => {
        expect(intern.name).toBe("Levi");
        expect(intern.id).toBe("1");
        expect(intern.email).toBe("test@test.com");
        expect(intern.school).toBe("DU");
    });
    it("Confirm name from getName method", () => {
        expect(intern.getName()).toBe("Levi");
    });
    it("Confirm ID from getID method", () => {
        expect(intern.getID()).toBe("1");
    });
    it("Confirm email from getEmail method", () => {
        expect(intern.getEmail()).toBe("test@test.com");
    });
    it("Confirm Github from getSchool method", () => {
        expect(intern.getSchool()).toBe("DU");
    });
    it("Confirm role from getRole method", () => {
        expect(intern.getRole()).toBe("Intern");
    });
});