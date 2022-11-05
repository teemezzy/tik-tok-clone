import type { NextComponentType, NextPageContext } from "next";

interface Props { }

const Navbar: NextComponentType<NextPageContext, {}, Props> = (props: Props,) => {
    return (
        <div>
            <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar