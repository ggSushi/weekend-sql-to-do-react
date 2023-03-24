Create table tasks (
	id serial primary key,
	task varchar (50) not null,
	complete boolean
);

Insert into tasks ("task", "complete")
Values ('Organize Office', FALSE),
('Weekly Assignments', FALSE),
('Bring Doggo to the Vet', TRUE);