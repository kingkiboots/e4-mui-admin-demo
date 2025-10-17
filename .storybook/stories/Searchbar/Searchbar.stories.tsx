import { DatePickerField } from "@/shared/ui/DatePickerFieldUI";
import type { SearchbarButtonGroupProps } from "@/shared/ui/SearchbarButtonGroupUI";
import { Searchbar } from "@/shared/ui/SearchbarUI";
import { Select, type SelectOption } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";

import type { Meta, StoryObj } from "@storybook/react";
import type { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Searchbar> = {
  title: "Searchbar/Searchbar - v0.1",
  component: Searchbar,
  tags: ["autodocs"],
  parameters: {
    layout: "full",
    componentSubtitle: "검색 영역",
  },
};

export default meta;

type Story = StoryObj<typeof Searchbar>;

interface SearchFormData {
  account: string;
  startDate: Dayjs | null;
  onetwothree: string;
}

const SearchbarExample = () => {
  const options: SelectOption[] = [
    { value: "1", label: "하나" },
    { value: "2", label: "둘" },
    { value: "3", label: "셋" },
  ];

  const { control } = useForm<SearchFormData>();

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      console.log("부다");
    },
    onClickClearSearchbar: () => {
      console.log("페슽");
    },
  };

  return (
    <Searchbar buttonsDef={buttonsDef}>
      <Searchbar.InputsArea>
        <Select
          label="한도구분"
          name="onetwothree"
          control={control}
          options={options}
          defaultValue={"1"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />
        <TextField
          label="계좌번호"
          name="account"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          control={control}
          required
        />
        <DatePickerField
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          name="startDate"
          control={control}
          dateTimeType="start"
          label="시작일"
          placeholder="날짜 선택"
          rules={{
            required: true,
          }}
        />
      </Searchbar.InputsArea>
    </Searchbar>
  );
};

export const Default: Story = {
  render: () => <SearchbarExample />,
  parameters: {
    docs: {
      source: {
        code: `
const SearchbarExample = () => {
  const options: SelectOption[] = [
    { value: "1", label: "하나" },
    { value: "2", label: "둘" },
    { value: "3", label: "셋" },
  ];

  const { control } = useForm<SearchFormData>();

  const buttonsDef: SearchbarButtonGroupProps = {
    onClickSearch: () => {
      console.log("부다");
    },
    onClickClearSearchbar: () => {
      console.log("페슽");
    },
  };

  return (
    <Searchbar buttonsDef={buttonsDef}>
      <Searchbar.InputsArea>
        <Select
          label="한도구분"
          name="onetwothree"
          control={control}
          options={options}
          defaultValue={"1"}
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
        />
        <TextField
          label="계좌번호"
          name="account"
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          control={control}
          required
        />
        <DatePickerField
          labelColSpan={{ xs: 12, sm: 4 }}
          inputColSpan={{ xs: 12, sm: 8 }}
          name="startDate"
          control={control}
          dateTimeType="start"
          label="시작일"
          placeholder="날짜 선택"
          rules={{
            required: true,
          }}
        />
      </Searchbar.InputsArea>
    </Searchbar>
  );
};
        `,
      },
    },
  },
};
