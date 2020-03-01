package com.github.nanamiarihara.nashornanticheat.utils;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class UnremovableList<T> implements List<T> {
    private List<T> wrappedList;
    public UnremovableList(List<T> list) {
        wrappedList = list;
    }
    @Override public int size() {
        return wrappedList.size();
    }

    @Override public boolean isEmpty() {
        return wrappedList.isEmpty();
    }

    @Override public boolean contains(Object o) {
        return wrappedList.contains(o);
    }

    @Override public Iterator<T> iterator() {
        return wrappedList.iterator();
    }

    @Override public Object[] toArray() {
        return wrappedList.toArray();
    }

    @Override public <T1> T1[] toArray(T1[] a) {
        return wrappedList.toArray(a);
    }

    @Override public boolean add(T t) {
        return wrappedList.add(t);
    }

    @Override public boolean remove(Object o) {
        throw new UnsupportedOperationException("not supported");
    }

    @Override public boolean containsAll(Collection<?> c) {
        return wrappedList.containsAll(c);
    }

    @Override public boolean addAll(Collection<? extends T> c) {
        return wrappedList.addAll(c);
    }

    @Override public boolean addAll(int index, Collection<? extends T> c) {
        return wrappedList.addAll(index, c);
    }

    @Override public boolean removeAll(Collection<?> c) {
        return wrappedList.removeAll(c);
    }

    @Override public boolean retainAll(Collection<?> c) {
        return wrappedList.retainAll(c);
    }

    @Override public void clear() {
        wrappedList.clear();
    }

    @Override public T get(int index) {
        return wrappedList.get(index);
    }

    @Override public T set(int index, T element) {
        return wrappedList.set(index, element);
    }

    @Override public void add(int index, T element) {
        wrappedList.add(index, element);
    }

    @Override public T remove(int index) {
        throw new UnsupportedOperationException("not supported");
    }

    @Override public int indexOf(Object o) {
        return wrappedList.indexOf(o);
    }

    @Override public int lastIndexOf(Object o) {
        return wrappedList.lastIndexOf(o);
    }

    @Override public ListIterator<T> listIterator() {
        return wrappedList.listIterator();
    }

    @Override public ListIterator<T> listIterator(int index) {
        return wrappedList.listIterator(index);
    }

    @Override public List<T> subList(int fromIndex, int toIndex) {
        return wrappedList.subList(fromIndex, toIndex);
    }
}
