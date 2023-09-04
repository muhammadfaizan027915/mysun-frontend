import Layout from "../../layout";
import Container from "../../common/container";
import Heading from "../../common/heading";
import DateInput from "../../common/dateInput";
import Button from "../../common/button"
import { useState } from "react";

function NewProject() {
  const [inputValues, setInputValues] = useState({});
  const onChange = (e) => {
    const target = e.target ?? {};
    setInputValues((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  console.log(inputValues)

  return (
    <Layout>
      <Container>
        <div className="h-full grid grid-cols-12 gap-2 sm:gap-4 text-[#505050]">
          <div className="col-span-12  md:col-span-8 h-full">
            <Heading title={"New Project"} additionalClases={"mb-2 lg:mb-8"} />
            <form className=" flex flex-col gap-2 lg:gap-6 lg:ml-14">
              <label className="flex flex-col lg:flex-row gap-1">
                <span className="md:w-1/4 text-lg font-medium">
                  Project Name:
                </span>
                <input
                  type="text"
                  name="projectName"
                  value={inputValues?.projectName}
                  onChange={onChange}
                  placeholder="Enter project name"
                  className="h-10 w-full py-2 px-4 rounded-full border-[1px] border-[#8C8C8C] bg-white focus-within:outline-[#21D0B2]"
                />
              </label>

              <label className="flex flex-col lg:flex-row gap-1">
                <span className="md:w-1/4 text-lg font-medium">
                  Start Date:
                </span>
                <DateInput
                  onChange={onChange}
                  value={inputValues?.startDate}
                  placeholder={"Choose start date of project"}
                  additonalProps={{
                    name: "startDate",
                  }}
                />
              </label>

              <label className="flex flex-col lg:flex-row gap-1">
                <span className="md:w-1/4 text-lg font-medium">End Date:</span>
                <DateInput
                  onChange={onChange}
                  value={inputValues?.endDate}
                  placeholder={"Choose end date of project"}
                  additonalProps={{
                    name: "endDate",
                  }}
                />
              </label>

              <label className="flex flex-col lg:flex-row gap-1">
                <span className="md:w-1/4 text-lg font-medium">Worker:</span>
                <input
                  type="text"
                  placeholder="Choose the worker for project"
                  className="h-10 w-full py-2 px-4 rounded-full border-[1px] border-[#8C8C8C] bg-white focus-within:outline-[#21D0B2]"
                />
              </label>

              <label className="flex flex-col lg:flex-row gap-1">
                <span className="md:w-1/4 text-lg font-medium">
                  Upload file
                </span>
                <input
                  type="text"
                  placeholder="Choose the worker for project"
                  className="h-10 w-full py-2 px-4 rounded-full border-[1px] border-[#8C8C8C] bg-white focus-within:outline-[#21D0B2]"
                />
              </label>

            <div className="mb-4 mt-2 lg:mt-0 text-right">
              <Button title={'Create Project'} additionalClasses={'border-2 border-[#21D0B2]  text-[#21D0B2] bg-transparent'} />
            </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-4 h-full order-first md:order-none">
            <div className="flex flex-col items-center mt-4 sm:mt-20">
              <img src="./images/taskIcon-lg.png" />
              <p className="font-semibold mt-2 text-xl h-5">{inputValues?.projectName}</p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default NewProject;
