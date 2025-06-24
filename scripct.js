fetch('data.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.trim().split('\n').map(row => row.split(','));
    const table = document.getElementById('data-table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    // Header
    const headerRow = document.createElement('tr');
    rows[0].forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Data
    rows.slice(1).forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  });
