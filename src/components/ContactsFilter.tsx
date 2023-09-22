type PropTypes = {
  filterGender: string;
  setFilterGender: React.Dispatch<React.SetStateAction<string>>;
  filterCountry: string;
  setFilterCountry: React.Dispatch<React.SetStateAction<string>>;
  countryList: string[];
};

const ContactsFilter = ({
  filterGender,
  setFilterGender,
  filterCountry,
  setFilterCountry,
  countryList,
}: PropTypes) => {
  return (
    <section className="mt-4 space-x-2 text-right">
      <select
        value={filterGender}
        onChange={(e) => setFilterGender(e.target.value)}
        className="flex-1 px-2 py-1 border border-black bg-gray-500/20"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        value={filterCountry}
        onChange={(e) => setFilterCountry(e.target.value)}
        className="flex-1 px-2 py-1 border border-black bg-gray-500/20"
      >
        <option value="">Country</option>
        {countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ContactsFilter;
