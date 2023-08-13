import Mustache from "mustache";

class DataMapper {
  private requestBody: Record<string, string>;

  constructor() {
    this.requestBody = {};
  }

  addMapping(key: string, mapping: string): void {
    this.requestBody[key] = mapping;
  }

  mapData(input: Record<string, any>): Record<string, any> {
    const mappedData: Record<string, any> = {};

    for (const key in this.requestBody) {
      const mappingExpression = this.requestBody[key];
      const mappedValue = this.resolveMappingExpression(
        mappingExpression,
        input
      );
      mappedData[key] = mappedValue;
    }

    return mappedData;
  }

  resolveMappingExpression(
    expression: string,
    input: Record<string, any>
  ): string {
    const value = Mustache.render(expression, input);
    return typeof value === "object" ? JSON.stringify(value) : value;
  }
}

// example
const dataMapper = new DataMapper();

// how user wants ot map the data
dataMapper.addMapping(
  "fullName",
  "{{system_1.firstName}} {{system_1.secondName}}"
);
dataMapper.addMapping("age", "{{system_1.age}}");
dataMapper.addMapping("test", "hello");

// system 1 output
const system1Output = {
  firstName: "Moaaz",
  secondName: "Elsayed",
  age: 22,
};

try {
  // mapped data: resolved for system 2
  const mappedData = dataMapper.mapData({ system_1: system1Output });
  console.log(mappedData);
} catch (error: any) {
  console.error(error.message);
}
