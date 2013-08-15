package com.sap.hana.cloud.sample;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import com.sap.hana.cloud.sample.Book;
import java.util.Collection;
import javax.persistence.OneToMany;

@Entity
@Table(name = "T_LIBRARY")
@NamedQuery(name = "AllLibrary", query = "select p from Library p")
public class Library {

	@Id
	@GeneratedValue
	private int id;
	@Basic
	private String code;
	@Basic
	private String title;
	@Basic
	private String description;
	@OneToMany(mappedBy = "library")
	private Collection<Book> book;
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

	public Collection<Book> getBook() {
	    return book;
	}

	public void setBook(Collection<Book> param) {
	    this.book = param;
	}

}