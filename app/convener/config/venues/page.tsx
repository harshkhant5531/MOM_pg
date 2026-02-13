"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Plus,
  Edit2,
  Trash2,
  Users,
  Loader2,
  X,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  getVenues,
  deleteVenue,
  createVenue,
  updateVenue,
} from "@/app/actions/master-config";

export default function VenuesPage() {
  const [venues, setVenues] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVenue, setEditingVenue] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
  });

  const fetchVenues = async () => {
    setIsLoading(true);
    try {
      const data = await getVenues();
      setVenues(data);
    } catch (error) {
      console.error("Failed to fetch venues:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this venue?")) {
      await deleteVenue(id);
      fetchVenues();
    }
  };

  const handleOpenModal = (venue: any = null) => {
    if (venue) {
      setEditingVenue(venue);
      setFormData({
        name: venue.VenueName,
        location: venue.Location || "",
        capacity: venue.Capacity?.toString() || "",
      });
    } else {
      setEditingVenue(null);
      setFormData({ name: "", location: "", capacity: "" });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingVenue) {
        await updateVenue(editingVenue.VenueID, formData);
      } else {
        await createVenue(formData);
      }
      setIsModalOpen(false);
      fetchVenues();
    } catch (error) {
      alert("Failed to save venue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 pb-20 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-start mb-10">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Venues
          </h1>
          <p className="text-slate-500 font-medium">
            Manage and configure meeting locations and their capacities
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all active:scale-95"
        >
          <Plus size={20} />
          Add New Venue
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 animate-pulse"
                />
              ))
          : venues.map((venue, idx) => (
              <motion.div
                key={venue.VenueID}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-900 rounded-3xl border border-slate-100 dark:border-gray-800 shadow-xl shadow-slate-500/5 group hover:border-blue-500/50 transition-all relative overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building size={24} />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenModal(venue)}
                        className="cursor-pointer p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-all"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(venue.VenueID)}
                        className="cursor-pointer p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-800 dark:text-white capitalize mb-2">
                    {venue.VenueName}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm font-medium mb-6">
                    <MapPin size={14} className="text-blue-500" />
                    {venue.Location || "Remote / No fixed location"}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                      <Users size={14} />
                      {venue.Capacity || "0"} Capacity
                    </div>
                    <span
                      className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                        venue.Capacity > 20
                          ? "bg-orange-50 text-orange-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {venue.Capacity > 20 ? "Large" : "Standard"}
                    </span>
                  </div>
                </div>

                {/* Visual background element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
              </motion.div>
            ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-slate-50 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {editingVenue
                      ? "Edit Venue Configuration"
                      : "New Venue Setup"}
                  </h2>
                  <p className="text-slate-500 text-sm">
                    Define meeting space parameters
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-50 dark:hover:bg-gray-800 rounded-xl text-slate-400"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Venue Name
                  </label>
                  <div className="relative">
                    <Building
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Executive Boardroom"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Location Detail
                  </label>
                  <div className="relative">
                    <MapPin
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      required
                      type="text"
                      placeholder="e.g. 4th Floor, West Wing"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                    Seating Capacity
                  </label>
                  <div className="relative">
                    <Users
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      required
                      type="number"
                      placeholder="e.g. 15"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-gray-800 border-none rounded-2xl text-sm font-bold text-slate-700 dark:text-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      value={formData.capacity}
                      onChange={(e) =>
                        setFormData({ ...formData, capacity: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-[2] py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Plus size={18} />
                    )}
                    {editingVenue ? "Update Configuration" : "Register Venue"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
