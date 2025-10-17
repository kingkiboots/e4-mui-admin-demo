import { DataGrid, type GridColDef } from "@/shared/ui/DataGridUI";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DataGrid> = {
  title: "DataGrid/DataGrid - v0.1",
  component: DataGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "full",
    componentSubtitle: "검색 영역",
    docs: {
      description: {
        component: `
  - 데이터를 화면에 노출하기 위한 컴포넌트
  - 가져오는 데이터의 형식만 리스트로 지정하고 데이터를 넣어주면 자동으로 데이터 맵핑 가능
  - 체크박스 or 더블클릭을 사용하여 하나의 데이터를 선택가능
  - 페이지네이션 기능 제공
        `,
      },
    },
  },
  argTypes: {
    rows: {
      description:
        "화면의 나타낼 데이터를 넣는 곳 기본적으로 API를 통해서 배열 형태로 데이터로 받아서와서 columns에 있는 형식과 매칭하여 화면에 노출한다.",
      table: {
        type: {
          summary: "Array Data (예시)",
          detail: `
[
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 }
]`,
        },
      },
    },
    columns: {
      description:
        "데이터의 필드 이름, 헤더에노출시킬 이름, 길이, 변경여부 등의 정보를 받아서 화면에 어떻게 나타낼지를 지정할수 있음",
      table: {
        type: {
          summary: "Array Data (예시)",
          detail: `
[
  { 
    field: "id", //서버에서 가져오는 데이터 칼럼명
    headerName: "ID", // 화면에 보여줄 헤더명
    width: 90 // 길이
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
]`,
        },
      },
    },
    initialState: {
      description: `
  - 초기 상태 (pagination 등) ,
  - pageSize의 경우에는 한페이지에 나타낼 데이터의 갯수 지정 (type : number)
      `,
      control: "object", // 객체 컨트롤을 활성화 (선택 사항)
    },
    checkboxSelection: {
      description: "체크박스 사용여부 제어",
      type: "boolean",
    },
    disableRowSelectionOnClick: {
      description:
        "GRID 안에 있는 ROW 를 클릭했을때 이벤트가 일어날지의 여부 제어",
      type: "boolean",
    },
    onRowDoubleClick: {
      description: "row를 더블 클릭했을때 이벤트를 실행 하게 해주는 Props",
      table: {
        type: {
          summary: "예시",
          detail: `
          onRowDoubleClick={() => {
  alert("hello");
}}
          `,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataGrid>;

export const Default: Story = {
  args: {
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 5, // 한페이지에 나타낼 데이터의 갯수 지정
        },
      },
    },
  },
  render: () => {
    const columns: GridColDef<(typeof rows)[number]>[] = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
      },
      {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 110,
        editable: true,
      },
    ];

    const rows = [
      { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
      { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
      { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
      { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
      { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
      { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
      { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
      { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
      { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];
    return (
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        // pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowDoubleClick={() => {
          alert("hello");
        }}
      />
    );
  },
};
