<?php
$host = getenv('IP');
$username = 'jasejay09';
$password = 'jasejay09!';
$dbname = 'world';

$country =$_GET['country'];
$context = $_GET['context'];


?>
<?php if ($context != cities) : ?>
<?php 
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'"); 
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Continent</th>
            <th>Independence Year</th>
            <th>Head of State</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($results as $row): ?>
        <tr>
            <td><?= $row['name']; ?></td>
            <td><?= $row['continent']; ?></td>
            <td><?= $row['head_of_state']; ?></td>
            <td><?= $row['independence_year']; ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<?php else : ?>
<?php
$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt2 = $conn->query("SELECT * FROM cities cit JOIN countries c on cit.country_code = c.code WHERE name LIKE '%$country%' ");
$cities = $stmt2->fetchAll(PDO::FETCH_ASSOC);
?>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>District</th>
            <th>Population</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($cities as $city): ?>
        <tr>
            <td><?= $city['name']; ?></td>
            <td><?= $city['district']; ?></td>
            <td><?= $city['population']; ?></td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<?php endif; ?>
