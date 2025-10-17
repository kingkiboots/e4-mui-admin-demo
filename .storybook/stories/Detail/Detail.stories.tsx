import { SELECT_OPTION_YN, USE_YN_Y } from "@/shared/const";
import { Detail } from "@/shared/ui/DetailUI";
import { Select } from "@/shared/ui/SelectUI";
import { TextField } from "@/shared/ui/TextFieldUI";

import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Detail> = {
  title: "Detail/Detail - v0.1",
  component: Detail,
  tags: ["autodocs"],
  parameters: {
    layout: "full",
    componentSubtitle: "검색 영역",
    docs: {
      description: {
        component: `
  - input을 하나의 컨텐츠로 묶어 사용하기 위함
  - 자식 요소로 여러가지 인풋을 넣어서 사용
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: "가장 위에 나타낼 타이틀을 작성",
      type: "string",
    },
    information: {
      description: "하단의 주의사항등을 적을 때 사용",
      type: "string",
    },
    children: {
      description: "여러가지 input컴포넌트를 사용하여 안에 내용을 작성",
      table: {
        type: {
          summary: "예시",
          detail: `
<TextField
    label="이벤트명"
    placeholder="테스트이벤트2"
    // register={register("serviceCd")}
    totalColSpan={{ xs: 12, sm: 3 }}
    labelColSpan={{ xs: 12, lg: 4 }}
    inputColSpan={{ xs: 12, lg: 8 }}
/>
<Select
    label="카테고리"
    options={SELECT_OPTION_YN}
    defaultValue={USE_YN_Y}
    // register={register("useYn")}
    totalColSpan={{ xs: 12, sm: 3 }}
    labelColSpan={{ xs: 12, lg: 4 }}
    inputColSpan={{ xs: 12, lg: 8 }}
    disabled
/>
<Select
    label="브랜드"
    options={SELECT_OPTION_YN}
    defaultValue={USE_YN_Y}
    // register={register("useYn")}
    totalColSpan={{ xs: 12, sm: 3 }}
    labelColSpan={{ xs: 12, lg: 4 }}
    inputColSpan={{ xs: 12, lg: 8 }}
/>
            `,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Detail>;

const DetailExample = () => {
  const { control } = useForm<{ one: string; yn: string }>();

  return (
    <Detail
      key={"product-mng-detail-info"}
      title="분류 정보"
      information="분류 정보는 이벤트식별자, 매체식별자를 조회한 다음 선택이 가능합니다."
    >
      <TextField
        name="one"
        control={control}
        label="이벤트명"
        placeholder="테스트이벤트2"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <Select
        name="yn"
        control={control}
        label="카테고리"
        options={SELECT_OPTION_YN}
        defaultValue={USE_YN_Y}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
        disabled
      />
    </Detail>
  );
};

export const Default: Story = {
  render: () => <DetailExample />,
  parameters: {
    docs: {
      source: {
        code: `
const DetailExample = () => {
  return (
    <Detail
      key={"product-mng-detail-info"}
      title="분류 정보"
      information="분류 정보는 이벤트식별자, 매체식별자를 조회한 다음 선택이 가능합니다."
    >
      <TextField
        label="이벤트명"
        placeholder="테스트이벤트2"
        // register={register("serviceCd")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
      <Select
        label="카테고리"
        options={SELECT_OPTION_YN}
        defaultValue={USE_YN_Y}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
        disabled
      />
      <Select
        label="브랜드"
        options={SELECT_OPTION_YN}
        defaultValue={USE_YN_Y}
        // register={register("useYn")}
        totalColSpan={{ xs: 12, sm: 3 }}
        labelColSpan={{ xs: 12, lg: 4 }}
        inputColSpan={{ xs: 12, lg: 8 }}
      />
    </Detail>
  );
};
        `,
      },
    },
  },
};
