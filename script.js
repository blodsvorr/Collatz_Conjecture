class CollatzExecute {
        let start = 43;

        let cc1 = new CollatzFunction(start);

        console.log(cc1.getCurrentStep());

        while (cc1.getCurrentStep() !== 1) {
            if (cc1.getCurrentStep() % 2 === 0) {
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    console.log(" ");
                }
                console.log("\n");
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    console.log(" ");
                }
                console.log("|");

                cc1.takeStep();

                console.log("\n");
                for (let i = 0; i < cc1.getHorizLength(); i++) {
                    console.log(" ");
                }
            } else if (cc1.getCurrentStep() % 2 !== 0) {
                console.log(" -- ");
                cc1.addToHLength(4);
                cc1.addToHLength(String(cc1.getCurrentStep()).length);

                cc1.takeStep();
            }

            console.log(cc1.getCurrentStep());
        }

        console.log("\nNumber of Steps");
        console.log(cc1.getStepCounter());
}
