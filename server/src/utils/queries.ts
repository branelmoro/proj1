export const newJobsQuery = `
	SELECT j.contact_name as name,
		j.created_at as createdAt,
		s.name as suburb,
		c.name as category,
		j.id as jobId,
		j.description as description,
		j.price as price
	FROM jobs as j
		INNER JOIN suburbs as s on (j.suburb_id = s.id)
		INNER JOIN categories as c on (j.category_id = c.id)
	WHERE j.status = 'new';
`;

export const acceptedJobsQuery = `
	SELECT j.contact_name as name,
		j.created_at as createdAt,
		s.name as suburb,
		c.name as category,
		j.id as jobId,
		j.description as description,
		j.price as price,
		j.contact_phone as phoneNumber,
		j.contact_email as emailAddress
	FROM jobs as j
		INNER JOIN suburbs as s on (j.suburb_id = s.id)
		INNER JOIN categories as c on (j.category_id = c.id)
	WHERE j.status = 'accepted';
`;

export const updateJobStatusQuery = `
	UPDATE jobs
	SET status = ?
	WHERE id = ?;
`;
