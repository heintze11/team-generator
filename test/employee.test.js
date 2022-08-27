const Employee = requirer("../lib/employee");
const employee = new Employee("Levi", "1", "test@test.com");


describe("Employee", () => {
    it("Create constructor class from employee object", () => {
        expect(employee.name).toBe("Levi");
        expect(employee.id).toBe("1");
        expect(employee.email).toBe("test@test.com");
    });
    it("Confirm name from getName method", () => {
        expect(employee.getName()).toBe("Levi");
    });
    it("Confirm ID from getID method", () => {
        expect(employee.getID()).toBe("1");
    });
    it("Confirm email from getEmail method", () => {
        expect(employee.getEmail()).toBe("test@test.com");
    });
    it("Confirm role from getRole method", () => {
        expect(employee.getRole()).toBe("Employee");
    });
})