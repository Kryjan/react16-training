import React from "react";
import ReactDOM from "react-dom";
import { DumbHello } from "./DumbHello";

import { shallow, mount, render } from "enzyme";

describe("renders without crashing", () => {
    it("when default approach used", () => {
        const who = "Kryjan";
        const wrapper = render(<DumbHello who={who} onWhoChange={() => null} />);
        expect(wrapper.text).not.toBeNull();
        expect(wrapper.text()).toContain("Kryjan");

    });

    describe("when enzyme", () => {
        it("shallow used", () => {
            const who = "Kryjan";
            const wrapper = shallow(<DumbHello who={who} onWhoChange={() => null} />);
            expect(wrapper.text).not.toBeNull();
            expect(wrapper.text()).toContain("Kryjan");
        });

        it("mount used", () => {
            const who = "Kryjan";
            const wrapper = mount(<DumbHello who={who} onWhoChange={() => null} />);
            expect(wrapper.text).not.toBeNull();
            expect(wrapper.text()).toContain("Kryjan");
        });
    });

    describe("when enzyme snapshots taken with", () => {
        it("shallow", () => {
            const who = "Kryjan";

            expect(shallow(<DumbHello who={who} onWhoChange={() => null} />)).toMatchSnapshot();
        });

        it("mount", () => {
            const who = "Kryjan";

            expect(mount(<DumbHello who={who} onWhoChange={() => null} />)).toMatchSnapshot();
        });

        it("render", () => {
            const who = "Kryjan";

            expect(render(<DumbHello who={who} onWhoChange={() => null} />)).toMatchSnapshot();
        });
    });
});