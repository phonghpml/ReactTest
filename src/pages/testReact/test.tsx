import { useMutation } from "react-query";

function updateRecordStatus(recordId, newStatus) {
}

const TestReact = () => {
  const [mutate] = useMutation(updateRecordStatus);

  function handleRecordStatusChange(recordId, newStatus) {
    mutate({ recordId, newStatus }).then(() => {
      queryClient.invalidateQueries("tableData");
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <input
              type="checkbox"
              onChange={(e) => handleRecordStatusChange(1, e.target.checked)}
            />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <input
              type="checkbox"
              onChange={(e) => handleRecordStatusChange(2, e.target.checked)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TestReact;
