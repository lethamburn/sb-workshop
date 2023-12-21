import Text from "./Text";

export default {
  title: "components/Text",
  component: Text,
  args: {
    children: "Text"
  }
}

const Template = (args) => <Text {...args}/>

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  type: "center",
  children: "It is thus unlikely that this bug will ever be fixed."
}