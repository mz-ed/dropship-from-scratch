const Profile = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <img
        src="/home/kali/Downloads/jpeg(4).jpg"
        alt="Profile"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #3498db',
        }}
      />
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '15px' }}>
        My Account
      </h2>
    </div>

    <div style={{ marginBottom: '30px' }}>
      <label htmlFor="username" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
        Username
      </label>
      <input
        type="text"
        id="username"
        defaultValue="ali_dropship"
        style={{
          padding: '10px',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '6px',
          marginBottom: '15px'
        }}
      />

      <label htmlFor="email" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
        Email
      </label>
      <input
        type="email"
        id="email"
        defaultValue="ali@example.com"
        style={{
          padding: '10px',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '6px',
          marginBottom: '15px'
        }}
      />

      <label htmlFor="address" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
        Shipping Address
      </label>
      <input
        type="text"
        id="address"
        defaultValue="123 Dropshipping St, Ecom City"
        style={{
          padding: '10px',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '6px',
          marginBottom: '15px'
        }}
      />

      <button
        style={{
          backgroundColor: '#3498db',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Save Changes
      </button>
    </div>

    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>
        Order History
      </h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: '#fff'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f4f6f8' }}>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Order #</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>#1001</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>2025-06-01</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Shipped</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>$59.99</td>
          </tr>
          <tr>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>#1002</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>2025-05-28</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Delivered</td>
            <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>$39.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Profile;
