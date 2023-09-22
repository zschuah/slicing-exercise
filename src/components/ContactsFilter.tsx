import SelectGray from "../layout/SelectGray";

type PropTypes = {
  filterGender: string;
  setFilterGender: React.Dispatch<React.SetStateAction<string>>;
  filterCountry: string;
  setFilterCountry: React.Dispatch<React.SetStateAction<string>>;
  countryList: string[];
  isLoading: boolean;
  isError: boolean;
};

const ContactsFilter = ({
  filterGender,
  setFilterGender,
  filterCountry,
  setFilterCountry,
  countryList,
  isLoading,
  isError,
}: PropTypes) => {
  return (
    <section className="mt-4 space-x-2 text-right">
      <SelectGray
        value={filterGender}
        onChange={(e) => setFilterGender(e.target.value)}
        disabled={isLoading || isError}
      >
        <option value="" disabled hidden>
          Select gender
        </option>
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </SelectGray>

      <SelectGray
        value={filterCountry}
        onChange={(e) => setFilterCountry(e.target.value)}
        disabled={isLoading || isError}
      >
        <option value="" disabled hidden>
          Select country
        </option>
        <option value="all">All</option>
        {countryList.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </SelectGray>
    </section>
  );
};

export default ContactsFilter;
