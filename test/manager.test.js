const Manager = require("../lib/manager");
const manager = new Manager("Levi", "1", "test@test.com", "2001");


describe("Manager", () => {
    it("Create constructor class from manager object", () => {
        expect(manager.name).toBe("Levi");
        expect(manager.id).toBe("1");
        expect(manager.email).toBe("test@test.com");
        expect(manager.officeNumber).toBe("2001");
    });
    it("Confirm name from getName method", () => {
        expect(manager.getName()).toBe("Levi");
    });
    it("Confirm ID from getID method", () => {
        expect(manager.getID()).toBe("1");
    });
    it("Confirm email from getEmail method", () => {
        expect(manager.getEmail()).toBe("test@test.com");
    });
    it("Confirm Github from getOfficeNumber method", () => {
        expect(manager.getOfficeNumber()).toBe("2001");
    });
    it("Confirm role from getRole method", () => {
        expect(manager.getRole()).toBe("Manager");
    });
});