package com.sap.hana.cloud.sample;

import javax.persistence.*;
import com.sap.hana.cloud.sample.Library;

@Entity
@Table(name = "T_BOOK")
@NamedQuery(name = "AllBooks", query = "select b from Book b")
public class Book {

	@Id
	private int id;
	@Basic
	private String code;
	@Basic
	private String title;
	@Basic
	private String description;
	@ManyToOne
	private Library library;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setCode(String param) {
		this.code = param;
	}

	public String getCode() {
		return code;
	}

	public void setTitle(String param) {
		this.title = param;
	}

	public String getTitle() {
		return title;
	}

	public void setDescription(String param) {
		this.description = param;
	}

	public String getDescription() {
		return description;
	}

	public Library getLibrary() {
	    return library;
	}

	public void setLibrary(Library param) {
	    this.library = param;
	}

}