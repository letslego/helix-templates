import { defineTool, z } from "@letslego/helix/tools";

export default defineTool({
  description: "Mock weather for a city",
  inputSchema: z.object({ city: z.string() }),
  async execute({ city }) {
    return { city, condition: "Sunny", temperatureF: 72 };
  },
});
