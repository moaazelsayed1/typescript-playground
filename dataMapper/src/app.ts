class DataMapper {
  private requestBody: Record<string, string>;

  constructor() {
    this.requestBody = {};
  }

  public addMapping(key: string, mapping: string) {
    this.requestBody[key] = mapping;
  }

  public mapData(input: Record<string, any>): Record<string, any> {
    const mappedData: Record<string, any> = {};

    /* console.log(this.requestBody); */
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

  private resolveMappingExpression(
    expression: string,
    input: Record<string, any>
  ): string {
    const placeholderRegex = /\{\{(.*?)\}\}/g;
    const resolvedExpression = expression.replace(
      placeholderRegex,
      (_, placeholder) => {
        const parts = placeholder.split(".");
        let value = input;
        /* console.log("parts", parts); */
        /* console.log("value", value); */

        for (const part of parts) {
          value = value[part];
          if (value === undefined) {
            return "";
          }
        }

        return value.toString();
      }
    );
    return resolvedExpression;
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

// unhandled case
/* const system1Output = { */
/*   firstName: "Moaaz", */
/*   secondName: "Elsayed", */
/*   age: { a: 22 }, */
/* }; */

try {
  // mapped data: resolved for system 2
  const mappedData = dataMapper.mapData({ system_1: system1Output });
  console.log(mappedData);
} catch (error: any) {
  console.error(error.message);
}
