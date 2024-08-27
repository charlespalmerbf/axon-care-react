describe("addition", () => {
    it("adds 1 + 1 and equals 2", () => {
        function addition() {
            return 1 + 1;
        }

        expect(addition()).toBe(2);
    });
});
