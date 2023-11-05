export default function SelectAge() {
  return (
    <div>
      <label htmlFor="ageGroup" className="text-base block font-medium mb-2">
        나이대
      </label>
      <select
        name="ageGroup"
        id="ageGroup"
        className="mb-8 w-40 text-center h-11 border-2 border-main-gray rounded-xl"
      >
        <option value="20s">20대</option>
        <option value="30s">30대</option>
        <option value="40s">40대</option>
        <option value="50s">50대</option>
        <option value="60s">60대</option>
        <option value="70s">70대</option>
      </select>
    </div>
  );
}
