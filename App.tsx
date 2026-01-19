const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Layout ke andar rakha taake Header/Footer nazar aaein */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Ye rahi aap ki Dynamic SEO Route */}
          <Route path="roofing-:citySlug" element={<CityServicePage />} />
          
          <Route path="services" element={<ServicesPage />} />
          <Route path="areas-we-serve" element={<AreasWeServe />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
