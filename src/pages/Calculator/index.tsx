import React, { useState } from "react";
import { CFooter, CHeader } from "../../components";

class Calculator {
  public static add(fparam: number, sparam: number) {
    return fparam + sparam;
  }
  public static subtract(fparam: number, sparam: number) {
    return fparam - sparam;
  }
  public static multiply(fparam: number, sparam: number) {
    return fparam * sparam;
  }
  public static divide(fparam: number, sparam: number) {
    return fparam / sparam;
  }
}

const Index: React.FC = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleAddNumber = async () => {
    let res = Calculator.add(firstInput, secondInput);
    setResult(res);
    setFirstInput(0);
    setSecondInput(0);
  };

  return (
    <>
      <CHeader />
      <div className="md:px-[15%] md:py-4 px-3">
        <h1 className="text-center">Calculator</h1>
        <p className="text-center">Introducing simple calculator with React.</p>
        <div className="w-full flex items-center">
          <input
            type="input"
            value={firstInput}
            onChange={(e) => {
              setFirstInput(Number(e.target.value));
            }}
            placeholder="Enter number to calculate"
          />
          <input
            type="input"
            value={secondInput}
            onChange={(e) => {
              setSecondInput(Number(e.target.value));
            }}
            placeholder="Enter number to calculate"
          />
          <button onClick={handleAddNumber} type="submit">
            Calculate
          </button>
        </div>
        <div>{result}</div>
      </div>

      <CFooter />
    </>
  );
};

export default Index;
